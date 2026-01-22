import {useCallback, useEffect, useRef, useState, type MutableRefObject} from 'react'

import {type Observable, ObservableMap, ObservableSet, ObservableValue} from '@github-ui/observable'

/**
 * Returns a constant reference to an ObservableValue
 * @param initialValue the initial value of the observable
 */
export function useObservableValue<T>(initialValue: T): ObservableValue<T> {
  const [observableRef] = useState(() => new ObservableValue(initialValue))
  return observableRef
}

/**
 * Returns a ref to an ObservableValue
 * @param initialValue the initial value of the observable
 */
export function useObservableValueRef<T>(initialValue: T): [MutableRefObject<ObservableValue<T>>, (value: T) => void] {
  const observableRef = useRef<null | ObservableValue<T>>(null)
  if (observableRef.current === null) {
    observableRef.current = new ObservableValue(initialValue)
  }
  const setObservableRef = useCallback((value: T) => {
    if (observableRef.current !== null) {
      observableRef.current.value = value
    }
  }, [])
  return [observableRef as MutableRefObject<ObservableValue<T>>, setObservableRef]
}

/**
 * Returns a constant reference to an ObservableSet
 * @param args the initializer arguments for the underlying Set
 */
export function useObservableSet<T>(...args: ConstructorParameters<typeof Set<T>>): ObservableSet<T> {
  const [observableRef] = useState(() => new ObservableSet(...args))
  return observableRef
}

/**
 * Returns a constant reference to an ObservableMap
 * @param args the initializer arguments for the underlying Map
 */
export function useObservableMap<K, V>(...args: ConstructorParameters<typeof Map<K, V>>) {
  const [observableRef] = useState(() => new ObservableMap(...args))
  return observableRef
}

/** We could use null or undefined, but those are valid values for an observable, so we need a value that is guaranteed unique. */
const NO_VALUE = Symbol('no value')

/**
 * Safely subscribes to and unsubscribes from an observable
 * @param observable the subject observable
 * @param onChange a callback to run in response to changes in the observable
 */
export function useSubscription<T>(observable: Observable<T>, onChange: (value: T) => void): void {
  const initialValueRef = useRef<T | typeof NO_VALUE>(observable.value)
  const onChangeRef = useRef(onChange)
  useEffect(() => {
    onChangeRef.current = onChange
  })

  useEffect(() => {
    // it is possible that the value has already changed after the initial render and before we make the subscription
    // so we need to call the onChange callback with the current value
    if (initialValueRef.current !== NO_VALUE && initialValueRef.current !== observable.value) {
      onChangeRef.current(observable.value)
      initialValueRef.current = NO_VALUE
    }
    return observable.subscribe(value => onChangeRef.current(value))
  }, [observable])
}

/**
 * Returns a stateful value that is updated (re-rendering the
 * component) when the given observable changes
 * @param observable the subject observable
 */
export function useObservedState<T>(observable: Observable<T>): T {
  const [value, setValue] = useState(observable.value)

  useSubscription(observable, newValue => setValue(newValue))

  return value
}

/**
 * Returns a stateful value that is updated (re-rendering the
 * component) when the given observable changes - can use this
 * with an observable map as the return value becasue we manually
 * re-render when the value is updated
 * @param observable the subject observable
 */
export function useObservedStateMap<T>(observable: Observable<T>): T {
  const [value, setValue] = useState(observable.value)
  const [_, setState] = useState({})

  useSubscription(observable, newValue => {
    setValue(newValue)
    //trigger a re-render by modifying an empty object
    setState({})
  })

  return value
}

/**
 * Returns a constant reference to an observable that is updated in
 * response to changes in the given observable.
 * @param observable the subject observable
 * @param derive a function which transforms the value of the subject
 *               observable to the value of the returned observable
 */
export function useDerivedObservable<T, D>(
  observable: ObservableValue<T>,
  derive: (value: T) => D,
): ObservableValue<D> {
  const derivedObservable = useObservableValue(derive(observable.value))

  useSubscription(observable, value => {
    // eslint-disable-next-line react-hooks/immutability
    derivedObservable.value = derive(value)
  })

  return derivedObservable
}

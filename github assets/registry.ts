interface CustomMetric {
  name: string
  hash: string
  type: PlatformBrowserCustomMetricType
}

export const CUSTOM_METRIC_REGISTRY = {
  PRS_COMMENT_BOX_INP: {
    name: 'pull_requests.comment_box.inp',
    hash: '070a85f091c124d118031ed374badf58df0cd9c2902f9aa4f9e09f6fdcbb91d0',
    type: 'distribution',
  },
  PULL_REQUESTS_FILES_JS_HEAP: {
    name: 'pull_requests.files.js_heap',
    hash: '7c5d986de8ccbfd17ae58e0da85158912cf65aeb256aecf28c35ddeb794cd2d3',
    type: 'distribution',
  },
} as const satisfies Record<string, CustomMetric>

export type CustomMetricKey = keyof typeof CUSTOM_METRIC_REGISTRY

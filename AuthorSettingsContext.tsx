import {merge} from '@primer/styled-react'
import type React from 'react'
import {createContext, use} from 'react'

export type AuthorSettings = {
  fontWeight: 'normal' | 'semibold' | 'bold'
  fontColor: 'fg.default' | 'fg.muted'
  includeTooltip: boolean
  avatarSize: 16 | 20 | undefined
}

const defaultSettings: AuthorSettings = {
  fontWeight: 'bold' as const,
  fontColor: 'fg.default' as const,
  includeTooltip: false,
  avatarSize: undefined, // defaults to primer component default
}

const AuthorSettingsContext = createContext<AuthorSettings>(defaultSettings)

export function AuthorSettingsProvider({
  authorSettings,
  children,
}: React.PropsWithChildren<{authorSettings: Partial<AuthorSettings> | undefined}>) {
  const authorSettingsOrDefault = merge(defaultSettings, authorSettings ?? {})
  return <AuthorSettingsContext value={authorSettingsOrDefault}>{children}</AuthorSettingsContext>
}

export function useAuthorSettings() {
  return use(AuthorSettingsContext) || defaultSettings
}

try{ AuthorSettingsContext.displayName ||= 'AuthorSettingsContext' } catch {}
try{ AuthorSettingsProvider.displayName ||= 'AuthorSettingsProvider' } catch {}
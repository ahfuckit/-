import {Fragment, type PropsWithChildren} from 'react'

import type {Author} from './commit-attribution-types'
import {AuthorsDialog} from './components/AuthorsDialog'
import {CommitAuthorStack} from './components/CommitAuthorStack'
import {AuthorLink} from './components/AuthorLink'
import {OrgLink} from './components/OrgLink'
import type {RepositoryNWO} from '@github-ui/current-repository'
import {AuthorAvatar} from './components/AuthorAvatar'
import {AuthorSettingsProvider, type AuthorSettings} from './contexts/AuthorSettingsContext'

import {RepoPushIcon} from '@primer/octicons-react'
import styles from './CommitAttribution.module.css'
import {clsx} from 'clsx'

export interface CommitAttributionProps {
  authors: Author[]
  committer?: Author
  committerAttribution?: boolean
  onBehalfOf?: Author
  includeVerbs: boolean
  repo: RepositoryNWO
  authorSettings?: Partial<AuthorSettings>
  textVariant?: 'default' | 'muted'
}

function SingleAuthor({author, repo}: {author: Author; repo: RepositoryNWO}) {
  return <AuthorAvatar author={author} repo={repo} />
}

function AuthorByline({
  author,
  committer,
  committerAttribution,
  onBehalfOf,
  repo,
}: {
  author: Author
  committer?: Author
  committerAttribution?: boolean
  onBehalfOf?: Author
  repo: RepositoryNWO
}) {
  const authors = [author]
  if (committer && committerAttribution) {
    authors.push(committer)
  }

  return (
    <>
      <CommitAuthorStack authors={authors} onBehalfOf={onBehalfOf} />
      <AuthorLink author={author} repo={repo} className={styles.AuthorLink} />
    </>
  )
}

function TwoAuthors({authors, onBehalfOf, repo}: {authors: Author[]; onBehalfOf?: Author; repo: RepositoryNWO}) {
  return (
    <>
      <CommitAuthorStack authors={authors} onBehalfOf={onBehalfOf} />
      {authors.map((author, index) => (
        // eslint-disable-next-line @eslint-react/no-array-index-key
        <Fragment key={`${author.login}_${index}`}>
          <AuthorLink author={author} repo={repo} className={styles.AuthorLink} />
          {index !== authors.length - 1 && <span className="pl-1">and</span>}
        </Fragment>
      ))}
    </>
  )
}

function MultipleAuthors({authors, onBehalfOf, repo}: {authors: Author[]; onBehalfOf?: Author; repo: RepositoryNWO}) {
  return (
    <>
      <CommitAuthorStack authors={authors} onBehalfOf={onBehalfOf} />
      <AuthorsDialog authors={authors} repo={repo} />
    </>
  )
}

export function CommitAttribution({
  authors,
  committer,
  committerAttribution,
  onBehalfOf,
  repo,
  children,
  includeVerbs = true,
  authorSettings,
  textVariant = 'default',
}: PropsWithChildren<CommitAttributionProps>) {
  const singleAuthor = authors.length === 1 && !committerAttribution && !onBehalfOf
  const authorAndCommitter = authors.length === 1 && (committerAttribution || onBehalfOf)
  const inlineAuthorNames = authors.length === 2 && !committerAttribution
  const multipleAuthors = !singleAuthor && !authorAndCommitter && !inlineAuthorNames
  const firstAuthor = authors[0]
  const verbClass = includeVerbs ? 'pl-1' : ''

  return (
    <div className={clsx(textVariant === 'muted' ? 'color-fg-muted' : '', styles.CommitAttributionContainer)}>
      <AuthorSettingsProvider authorSettings={authorSettings}>
        {singleAuthor && firstAuthor && <SingleAuthor author={firstAuthor} repo={repo} />}
        {authorAndCommitter && firstAuthor && (
          <AuthorByline
            author={firstAuthor}
            committer={committer}
            committerAttribution={committerAttribution}
            onBehalfOf={onBehalfOf}
            repo={repo}
          />
        )}
        {inlineAuthorNames && <TwoAuthors authors={authors} onBehalfOf={onBehalfOf} repo={repo} />}
        {multipleAuthors && <MultipleAuthors authors={authors} onBehalfOf={onBehalfOf} repo={repo} />}

        <AuthoredOrCommitted
          committer={committer}
          committerAttribution={committerAttribution || false}
          includeVerbs={includeVerbs}
          repo={repo}
          verbClass={verbClass}
        />

        {onBehalfOf && (
          <>
            <span className="pl-1">on behalf of</span>
            <OrgLink org={onBehalfOf} className="pl-1" />
          </>
        )}

        {children}
      </AuthorSettingsProvider>
    </div>
  )
}

function AuthoredOrCommitted({
  committer,
  committerAttribution,
  includeVerbs,
  repo,
  verbClass,
}: {
  committer: Author | undefined
  committerAttribution: boolean
  includeVerbs: boolean
  repo: RepositoryNWO
  verbClass: string
}) {
  if (committer && committer.isGitHub) {
    return <span className={verbClass}>{includeVerbs && 'authored'}</span>
  } else if (!committerAttribution) {
    return <span className={verbClass}>{includeVerbs && 'committed'}</span>
  } else {
    return (
      <>
        <span className="pl-1">{includeVerbs ? 'authored and' : 'and'}</span>
        <AuthorLink author={committer} repo={repo} className={styles.AuthorLink} />
        <span className={verbClass}>{includeVerbs && 'committed'}</span>
      </>
    )
  }
}

export interface PushAttributionProps {
  pusher?: Author
  repo: RepositoryNWO
  textVariant?: 'default' | 'muted'
}

export function PushAttribution({
  pusher,
  repo,
  children,
  textVariant = 'default',
}: PropsWithChildren<PushAttributionProps>) {
  if (!pusher) return null

  return (
    <div className={clsx(textVariant === 'muted' ? 'color-fg-muted' : '', styles.CommitAttributionContainer)}>
      <span className="pl-1 pr-1">
        <RepoPushIcon className="mr-1" size="small" />
      </span>
      <SingleAuthor author={pusher} repo={repo} />
      <span className="pl-1">pushed</span>
      {children}
    </div>
  )
}

try{ SingleAuthor.displayName ||= 'SingleAuthor' } catch {}
try{ AuthorByline.displayName ||= 'AuthorByline' } catch {}
try{ TwoAuthors.displayName ||= 'TwoAuthors' } catch {}
try{ MultipleAuthors.displayName ||= 'MultipleAuthors' } catch {}
try{ CommitAttribution.displayName ||= 'CommitAttribution' } catch {}
try{ AuthoredOrCommitted.displayName ||= 'AuthoredOrCommitted' } catch {}
try{ PushAttribution.displayName ||= 'PushAttribution' } catch {}
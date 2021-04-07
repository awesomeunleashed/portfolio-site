const ExternalLink = ({ children, className, ...props }) => (
  <a {...props} className={className || 'link'} target='_blank' rel='noreferrer'>{children}</a>
)

export default ExternalLink

import StyledCard, {
  StyledCardTitle,
  StyledCardBody,
  StyledCardHeader,
} from "./StyledCard"

type CardProps = {
  testId: string
  showit: boolean
  title: string
  header?: React.ReactNode
  children: React.ReactNode
}
export const Card = ({
  testId,
  showit,
  title,
  header,
  children,
}: CardProps) => (
  <StyledCard data-testid={testId} $showit={showit}>
    <StyledCardTitle>{title}</StyledCardTitle>
    <StyledCardHeader>{header}</StyledCardHeader>
    <StyledCardBody>{children}</StyledCardBody>
  </StyledCard>
)

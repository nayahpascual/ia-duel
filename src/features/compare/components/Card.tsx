import StyledCard, {
  StyledCardTitle,
  StyledCardBody,
  StyledCardHeader,
} from "./styles/StyledCard"

type CardProps = {
  testId: string
  showIt: boolean
  title: string
  header?: React.ReactNode
  children: React.ReactNode
}
export const Card = ({
  testId,
  showIt,
  title,
  header,
  children,
}: CardProps) => (
  <StyledCard data-testid={testId} $showIt={showIt}>
    <StyledCardTitle>{title}</StyledCardTitle>
    <StyledCardHeader>{header}</StyledCardHeader>
    <StyledCardBody>{children}</StyledCardBody>
  </StyledCard>
)

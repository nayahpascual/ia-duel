import styled from "styled-components"

const StyledCard = styled.div<{ $showit: boolean }>`
  width: 400px;
  height: ${(p) => (p.$showit ? "auto" : "0px")};
  margin: ${(p) => (p.$showit ? "10px" : "0px")};
  padding: ${(p) => (p.$showit ? "20px" : "0px")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.53);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);

  opacity: ${(p) => (p.$showit ? "1" : "0")};
  visibility: ${(p) => (p.$showit ? "visible" : "hidden")};
  transition: opacity 2s, visibility 2s;
`
export const StyledCardTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`
export const StyledCardHeader = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`

export const StyledCardBody = styled.div`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
`

export default StyledCard

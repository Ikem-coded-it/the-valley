import { StyledEhosContainer, StyledEthosItem } from "./style"

type Rule = {
    title: string
    body: string
}

const EthosItem = ({...rule}) => (
    <StyledEthosItem>
        <h2>{rule.title}</h2>
        <p>{rule.body}</p>
    </StyledEthosItem>
)

export default function EthosContainer({ rules }: {rules: Rule[]}) {
    return(
        <StyledEhosContainer>
            {rules.map(rule => (
                <EthosItem key={rule.title} {...rule}/>
            ))}
        </StyledEhosContainer>
    )
}
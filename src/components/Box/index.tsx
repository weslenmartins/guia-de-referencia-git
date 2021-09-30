import Item from '../Item'
import Title from '../Title'
import * as S from './styled'

type BoxProps = {
  title: string
  commands?: []
}

type BoxCommandsProps = {
  title: string
}

const Box = ({ title, commands }: BoxProps) => {
  return (
    <S.Box className="container">
      <Title layout="section">{title}</Title>

      <S.Content>
        {commands.map((command: BoxCommandsProps, index) => (
          <Item title={command.title} key={`item-${index}`} />
        ))}
      </S.Content>
    </S.Box>
  )
}

export default Box

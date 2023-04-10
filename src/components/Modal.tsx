import { Root, Trigger, Portal, Overlay, Content, Close, Title } from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { ForwardedRef, ReactNode, forwardRef } from 'react';

type Props = {
  open: boolean;
  title: string;
  children: ReactNode[];
  handleOpenChange: React.Dispatch<React.SetStateAction<boolean>>,
}
type Ref = HTMLButtonElement;

// eslint-disable-next-line react/display-name
export const Modal = forwardRef<Ref, Props>((props, ref) => {

  return (

    <Root open={props.open} onOpenChange={props.handleOpenChange}>
      <Trigger asChild ref={ref as ForwardedRef<HTMLButtonElement>}>

        {props.children[0]}
      </Trigger>

      <Portal>
        <Overlay />
        <Content>
          <Close>
            <X size={24} aria-label="Fechar" />
          </Close>
          <Title>
            {props.title}
          </Title>
          <div ref={ref as ForwardedRef<HTMLDivElement>}>

            {props.children[1]}
          </div>
        </Content>
      </Portal>
    </Root>
  )
})
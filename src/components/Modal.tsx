import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Close,
  Title,
} from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { ForwardedRef, ReactNode, forwardRef } from "react";

type Props = {
  open: boolean;
  title: string;
  children: ReactNode[];
  handleOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
};
type Ref = HTMLButtonElement;

// eslint-disable-next-line react/display-name
export const Modal = forwardRef<Ref, Props>((props, ref) => {
  return (
    <Root open={props.open} onOpenChange={props.handleOpenChange}>
      <Trigger asChild ref={ref as ForwardedRef<HTMLButtonElement>}>
        {props.children[0]}
      </Trigger>

      <Portal>
        <Overlay className="fixed top-0 left-0 right-0 bottom-0 opacity-50 w-[100%] h-[100%] bg-zinc-950" />
        <Content className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] min-w-[30rem] max-w-[32rem] rounded-md bg-pachi-gray-header">
          <div className="flex justify-between py-5 px-5 border-b border-solid">
            <Title className="font-bold">{props.title}</Title>
            <Close className="hover:text-pachi-green">
              <X size={24} aria-label="Fechar" />
            </Close>
          </div>
          <div>{props.children[1]}</div>
        </Content>
      </Portal>
    </Root>
  );
});

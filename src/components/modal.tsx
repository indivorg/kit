import React from 'react';
import { HiX } from 'react-icons/hi';
import ReactModal, { Props as ReactModalProps, Styles } from 'react-modal';
import { IconButton, Label } from 'theme-ui';

export const defaultStyle: Styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(154, 160, 181, 0.5)',
  },
  content: {
    position: 'relative',
    transform: 'translateY(-50%)',
    top: '50%',
    width: '70%',
    maxWidth: '910px',
    maxHeight: '90%',
    margin: '0 auto',
    backgroundColor: '#fff',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '9px',
    outline: 'none',
    padding: '30px',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
  },
};

export type ModalProps = {
  header?: React.ReactNode | string;
  hideCloseButton?: boolean;
  fitContent?: boolean;
  style?: Styles;
} & ReactModalProps;

export const Modal: React.FC<ModalProps> = ({
  header,
  hideCloseButton = false,
  children,
  fitContent = false,
  ...props
}) => (
  <ReactModal
    className="Modal__Content"
    bodyOpenClassName="Modal__Body--open"
    htmlOpenClassName="Modal__Html--open"
    portalClassName="ModalPortal"
    overlayClassName="Modal__Overlay"
    style={{
      overlay: defaultStyle.overlay,
      content: fitContent
        ? { ...defaultStyle.content, width: 'fit-content' }
        : defaultStyle.content,
    }}
    {...props}
  >
    {React.isValidElement(header) ? (
      header
    ) : header ? (
      <Label sx={{ mb: 4, fontWeight: 'bold', color: 'primary', fontSize: 5 }}>
        {header}
      </Label>
    ) : null}
    {children}
    {!hideCloseButton && (
      <IconButton
        onClick={props.onRequestClose}
        sx={{ position: 'absolute', top: 3, right: 3, cursor: 'pointer' }}
      >
        <HiX sx={{ fontSize: 5 }} />
      </IconButton>
    )}
  </ReactModal>
);

ReactModal.setAppElement('#root');

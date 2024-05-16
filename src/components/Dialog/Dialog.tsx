import React, { useEffect, useRef, useState } from 'react';
import "./dialog.css";

type DialogProps = {
  open: boolean;
  disabled?: boolean;
  title: string;
  onSubmit: (name: string, description: string) => void;
  onCancel: () => void;
};

const useDialog = (open: boolean) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [open]);

  return { dialogRef: ref };
};

export const Dialog: React.FC<DialogProps> = ({
  open,
  disabled,
  title,
  onSubmit,
  onCancel,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { dialogRef } = useDialog(open);

  const resetFields = () => {
    setName("");
    setDescription("");
  };

  const handleSubmit = () => {
    onSubmit?.(name, description);
    resetFields();
  };

  const handleCancel = () => {
    onCancel();
    resetFields();
  };

  return (
    <dialog title={title} ref={dialogRef}>
      <header>
        <h1>{title}</h1>
        {/* <button>x</button> */}
      </header>
      <form method="dialog" onSubmit={handleSubmit} onReset={handleCancel}>
        <div className="item">
          <label>name</label>
          <input
            className="item-input"
            value={name}
            disabled={disabled}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="item">
          <label>description</label>
          <textarea
            className="item-input"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            disabled={disabled}
          />
        </div>
        <div className="actions">
          {disabled ? (
            <button type="reset" className="main">
              close
            </button>
          ) : (
            <>
              <button type="reset" className="secondary">
                cancel
              </button>
              <button type="submit" className="main">
                save
              </button>
            </>
          )}
        </div>
      </form>
    </dialog>
  );
};

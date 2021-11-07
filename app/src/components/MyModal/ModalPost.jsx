import React from "react"; /*rcfe*/


const Modal = ({ visible, setVisible, children }) => {
  /*visible, setVisible, children = props. В фигурных чтобы не писать кадлый раз . так мы его сразу раскрываем*/
  return (
    <>
          <div className={visible ? "modal open" : "modal"}>
        <div className="modal-content">
          <i
            class="material-icons pointer"
            onClick={() => {
              setVisible(false);
            }}
          >
            close
          </i>
          <div className="modal-body">{children}</div>
        </div>
      </div>
      <div
        onClick={() => {
          setVisible(false);
        }}
        className={visible ? "modal-overlay open-overlay" : "modal-overlay"}
      ></div>
    </>
  );
};

export default  Modal;

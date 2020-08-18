import * as PropTypes from "prop-types";
import React from "react";
import { BsReplyAll } from "react-icons/bs";

export function OrderFooter(props) {
  const { disabled, onSubmit, orderTotal } = props;
  return (
    <div className="footer-copyright">
      <div style={{clear:"right"}} className="">
        <a className="btn cbtn bw">
          Order Total: {orderTotal ? `Rs.${orderTotal}` : 0}
        </a>
      </div>
      {orderTotal > 0 && (
        <button style={{float:"right"}}
          className={`btn cbtn bw text-white ${
            disabled ? "disabled" : null
          }`}
          type="submit"
          name="action"
          onClick={onSubmit}
        >
          Order Now <BsReplyAll style={{fontSize:"18px"}}  />
        </button>
      )}
    </div>
  );
}

OrderFooter.propTypes = {
  orderTotal: PropTypes.any,
  disabled: PropTypes.bool,
  onSubmit: PropTypes.func
};

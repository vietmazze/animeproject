import React from "react";
import { connect } from "react-redux";

const Alerts = ({ alerts }) => {
  return (
    alerts.length > 0 &&
    alerts.map(alert => (
      <div className={`bg-${alert.type}`} key={alert.id}>
        {alert.msg}
      </div>
    ))
  );
};

const mapStateToProps = state => ({
  alerts: state.alerts
});

export default connect(mapStateToProps)(Alerts);

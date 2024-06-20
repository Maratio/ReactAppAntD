import React from "react";
import classes from "./PaginationSite.module.css";
import { Pagination, ConfigProvider } from "antd";

const PaginationSite = ({ paginationParam }) => {
  return (
    <div className={classes.paginationWrapper}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00b96b",
            colorText: "#1677ff",
            fontWeightStrong: 600
          },
        }}
      >
        <Pagination
          showSizeChanger={true}
          pageSizeOptions={[3, 6, 9]}
          total={paginationParam.recCount}
          current={paginationParam.pageCurrent}
          pageSize={paginationParam.pageSize}
          onChange={paginationParam.onChange}
        />
      </ConfigProvider>
    </div>
  );
};

export default PaginationSite;

import React from "react";
import classes from "./PaginationSite.module.css";
import { Pagination } from "antd";

const PaginationSite = ({ paginationParam }) => {
  return (
    <div className={classes.paginationWrapper}>
      <Pagination
        className={classes.pagination}
        showSizeChanger={true}
        pageSizeOptions={[3, 6, 9]}
        total={paginationParam.recCount}
        current={paginationParam.pageCurrent}
        pageSize={paginationParam.pageSize}
        onChange={paginationParam.onChange}
      />
    </div>
  );
};

export default PaginationSite;

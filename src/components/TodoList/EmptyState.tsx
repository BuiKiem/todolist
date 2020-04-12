import React from "react";
import { InboxOutlined as InboxOutlinedIcon } from "@material-ui/icons";
import { Notification } from "./Notification";

export const EmptyState: React.FC = () => {
  return (
    <Notification
      iconComponent={InboxOutlinedIcon}
      title="You list is empty"
      subTitle="Anything to add?"
    />
  );
};

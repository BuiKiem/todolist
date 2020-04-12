import React from "react";
import { SvgIconTypeMap, Typography } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

interface IProps {
  iconComponent: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  subTitle: string;
}

export const Notification: React.FC<IProps> = ({
  iconComponent,
  title,
  subTitle,
}) => {
  const Icon = iconComponent;

  return (
    <div className="flex flex-col items-center">
      <Icon color="disabled" fontSize="large" />
      <div className="text-center">
        <Typography variant="subtitle2" component="h2">
          {title}
        </Typography>
        <Typography variant="caption" component="h3">
          {subTitle}
        </Typography>
      </div>
    </div>
  );
};

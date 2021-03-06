import * as React from 'react';
import { StyledComponent, Omit } from '..';
import { ButtonBaseProps } from '../ButtonBase';

export type BottomNavigationButtonProps = {
  icon?: React.ReactNode;
  label?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
  onClick?: React.ReactEventHandler<any>;
  selected?: boolean;
  showLabel?: boolean;
  value?: any;
} & Partial<Omit<ButtonBaseProps, 'onChange'>>;

export type BottomNavigationButtonClassKey =
  | 'root'
  | 'selected'
  | 'selectedIconOnly'
  | 'wrapper'
  | 'label'
  | 'selectedLabel'
  | 'hiddenLabel'
  | 'icon'
  ;

declare const BottomNavigationButton: StyledComponent<BottomNavigationButtonProps, BottomNavigationButtonClassKey>;

export default BottomNavigationButton;

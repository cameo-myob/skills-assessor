import React from 'react';
import { MYOBLogo, Navigation, Icons } from '@myob/myob-widgets';


const brand = (
    <Navigation.Brand url="/" width="8rem">
      <MYOBLogo />
    </Navigation.Brand>
  );

const primary = [
  <Navigation.Link
    key=""
    label=""
    url=""
    disabled
  />,
];

const StartHereMenuItems = [
    <Navigation.MenuLink
      key="juniorDev"
      label="Protege"
      url="/protege"
    />,
    <Navigation.MenuLink
      key="generalDev"
      label="General Developer"
      url="/generalDev"
    />,
    <Navigation.MenuLink
      key="businessAnalyst"
      label="Business Analyst"
      url="/"
    />,
  ];

  const secondary = [
    <Navigation.Menu
    key="startHere"
    onSelect={() => ('selected')}
    label="Start Here"
    icon={<Icons.Caret />}
    items={StartHereMenuItems}
  />,
  <Navigation.Link key="howItWorks" label="How It Works" url="/howItWorks" />,
];

const navBar = () => {
    return <Navigation brand={brand} primary={primary} secondary={secondary} />
} 

export default navBar;
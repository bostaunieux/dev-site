import React from "react";
import NextLink from "next/link";
import { Button, Link as MuiLink, Menu, MenuItem } from "@material-ui/core";
import routes from "components/core/routes";

const UtilitiesLinks = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button aria-controls="utility-links-menu" aria-haspopup="true" color="inherit" onClick={openMenu}>
        Utilities
      </Button>
      <Menu
        id="utility-links-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={closeMenu}>
          <NextLink href={routes.TOOLS_UUID_GEN} passHref>
            <MuiLink component="a" color="inherit">
              UUID Generator
            </MuiLink>
          </NextLink>
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <NextLink href={routes.TOOLS_DECODER} passHref>
            <MuiLink component="a" color="inherit">
              URL Encoder / Decoder
            </MuiLink>
          </NextLink>
        </MenuItem>
      </Menu>
    </>
  );
};

export default UtilitiesLinks;

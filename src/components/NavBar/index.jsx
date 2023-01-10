import React from "react";
import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Link,
  Button,
  ButtonGroup,
  Avatar,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function NavBar({ CartWidget, filter, setFilter }) {
  const [isOpen, setIsOpen] = useState(false);
  const ETIQUETAS_CATEGORIAS = {
    "": "Productos",
    "men's clothing": "Hombre",
    "women's clothing": "Mujer",
    jewelery: "Joyas",
    electronics: "Electrónica",
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="gray.700"
      width="100%"
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          <Image
            maxH={55}
            src="./src/assets/chopin_w.png"
            alt="CHOPIN"
            title="CHOPIN"
          />
        </Heading>
      </Flex>

      <Box
        display={{ base: "block", md: "none" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Flex minWidth="max-content" alignItems="center" gap="5">
          <svg
            fill="white"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Flex>
      </Box>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
      >
        <ButtonGroup spacing={4}>
          <Button as={Link} to="/">
            Inicio
          </Button>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              value={filter}
            >
              {ETIQUETAS_CATEGORIAS[filter] || "Productos"}
            </MenuButton>
            <MenuList>
              <MenuItem
                value=""
                onClick={(event) => setFilter(event.target.value)}
              >
                {ETIQUETAS_CATEGORIAS[""]}
              </MenuItem>
              <MenuItem
                value="men's clothing"
                onClick={(event) => setFilter(event.target.value)}
              >
                {ETIQUETAS_CATEGORIAS["men's clothing"]}
              </MenuItem>
              <MenuItem
                value="women's clothing"
                onClick={(event) => setFilter(event.target.value)}
              >
                {ETIQUETAS_CATEGORIAS["women's clothing"]}
              </MenuItem>
              <MenuItem
                value="jewelery"
                onClick={(event) => setFilter(event.target.value)}
              >
                {ETIQUETAS_CATEGORIAS["jewelery"]}
              </MenuItem>
              <MenuItem
                value="electronics"
                onClick={(event) => setFilter(event.target.value)}
              >
                {ETIQUETAS_CATEGORIAS["electronics"]}
              </MenuItem>
            </MenuList>
          </Menu>

          <Button>Sobre nosotros</Button>
          <Button>Contacto</Button>
        </ButtonGroup>
      </Box>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Flex align="flex-end">
          <Menu>
            <Avatar
              as={MenuButton}
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <MenuList>
              <MenuGroup title="Hola, Dan Abrahmov!">
                <MenuItem>Mi cuenta</MenuItem>
                <MenuItem>Mis pedidos</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Ayuda">
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
          <CartWidget />
        </Flex>
      </Box>
    </Flex>
  );
}

export default NavBar;

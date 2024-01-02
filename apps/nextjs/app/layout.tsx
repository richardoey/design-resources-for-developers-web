"use client"

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import { AppShell, Burger, Group, NavLink, Card, Image, ScrollArea } from '@mantine/core';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState, useEffect } from 'react';
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();
  const apiUrl = 'https://design-resources-for-developers-api.onrender.com'

  const [categories, setCategories] = useState<Category[]>([]);
  const url = `${apiUrl}/api/v1/categories`;
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCategories(data.categories.entries);
      });
  }, []);

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
          >
            <AppShell.Header>
              <Group h="100%" px="md">
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                Design Resources for Developers
              </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
              Categories
              <AppShell.Section grow component={ScrollArea}>
                {categories.map(category =>
                  <Link
                    key={category.category}
                    href={`/category/${category.category}/1`}
                    className="display-block w-[80px] overflow-hidden text-muted-foreground"
                  >
                    <NavLink
                      href={`/category/${category.category}/1`}
                      label={category.category}
                    />
                  </Link>
                )}
              </AppShell.Section>
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
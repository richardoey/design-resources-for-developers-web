"use client"

import { Group, Card, Image, Text, Badge, Button, Grid } from '@mantine/core';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CategoryEntryPage({ params }: { params: { slug: string, pageNumber: number } }) {
  const apiUrl = 'https://design-resources-for-developers-api.onrender.com'

  const url = `${apiUrl}/api/v1/category/${params.slug}`;
  const pageNumber = params.pageNumber;

  const [category, setCategory] = useState<string>();
  const [categoryDescription, setCategoryDescription] = useState<string>();
  const [categoryEntries, setCategoryEntries] = useState<Resource[]>();
  const [entriesPerPage, setEntriesPerPage] = useState<number>(10);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data: CategoryDetail) => {
        setCategory(data.category)
        if (data.description) {
          setCategoryDescription(data.description);
        }

        if (data.entries.websites.length < 10)
          setEntriesPerPage(data.entries.websites.length);

        let startIndex = pageNumber === 1 ? 0 : entriesPerPage * pageNumber - entriesPerPage;

        let slicedCategoryEntries = data.entries.websites.slice(
          startIndex,
          startIndex + entriesPerPage
        );
        setCategoryEntries(slicedCategoryEntries)
        // let startIndex = pageNumber === 1 ? 0 : parseInt(entriesPerPage.value * pageNumber) - entriesPerPage.value;
        // categoryEntries.value = data.entries.websites.slice(
        //   startIndex,
        //   startIndex + entriesPerPage.value
        // );
        // pageAmount.value = Math.ceil(
        //   data.entries.websites.length / entriesPerPage.value
        // );

        // showLoadingSpinner.value = false;
      });
  }, []);

  return (
    <>
      <Text size="xl">{category}</Text>
      <Text size="md">{categoryDescription}</Text>
      <Grid>
        {categoryEntries?.map(entry =>
          <Grid.Col span={4}><ResourceDetail name={entry.name} description={entry.description} link={entry.link} /></Grid.Col>
        )}
      </Grid>
    </>
  );
}

function ResourceDetail({ name, description, link }) {

  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{name}</Text>
        </Group>

        <Text size="sm" c="dimmed">
          {description}
        </Text>

        <a
          target="_blank"
          href={link}
          style={{ textDecoration: 'none' }}
        >
          <Button color="blue" fullWidth mt="md" radius="md" >
            Visit Page
          </Button>
        </a>
      </Card>
    </>
  );
}
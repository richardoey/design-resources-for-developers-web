import { Metadata } from "next";
import { Group, Card, Image, Text, Badge, Button, Grid } from '@mantine/core';

export const metadata: Metadata = {
    title: "About",
};

export default function AboutPage() {
    return (
        <Text fw={500}>About Page</Text>
    );
}
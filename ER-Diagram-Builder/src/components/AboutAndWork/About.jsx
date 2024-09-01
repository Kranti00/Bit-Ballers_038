import React from "react";
import { Box, Heading, Text, List, ListItem } from '@chakra-ui/react';

const About = () => {
  return (
    <Box p={5} maxWidth="800px" mx="auto" fontFamily={'sans-serif'}>
      <Heading as="h2" size="xl" mb={4}>
        Common Entity Relation-ship Symbols
      </Heading>
      <Text mb={4}>
        An ER diagram has three main components: entities, relationships, and attributes connected by lines.
      </Text>

      <Heading as="h3" size="lg" mt={6} mb={2}>
        Entities
      </Heading>
      <Text mb={4}>
        Entities, which are represented by rectangles. An entity is an object or concept about which you want to store information. A weak entity is an entity that must be defined by a foreign key relationship with another entity as it cannot be uniquely identified by its own attributes alone.
      </Text>

      <Heading as="h3" size="lg" mt={6} mb={2}>
        Relationships
      </Heading>
      <Text mb={4}>
        Relationships, which are represented by diamond shapes, show how two entities share information in the database. In some cases, entities can be self-linked.
      </Text>

      <Heading as="h3" size="lg" mt={6} mb={2}>
        Attributes
      </Heading>
      <List spacing={3} mb={4}>
        <ListItem>
          <Text display="inline" fontWeight="bold">Key Attribute:</Text> A key attribute is the unique, distinguishing characteristic of the entity. For example, an employee's social security number might be the employee's key attribute.
        </ListItem>
        <ListItem>
          <Text display="inline" fontWeight="bold">Multivalued Attribute:</Text> A multivalued attribute can have more than one value. For example, an employee entity can have multiple skill values.
        </ListItem>
        <ListItem>
          <Text display="inline" fontWeight="bold">Derived Attribute:</Text> A derived attribute is based on another attribute. For example, an employee's monthly salary is based on the employee's annual salary.
        </ListItem>
      </List>

      <Heading as="h3" size="lg" mt={6} mb={2}>
        Connecting Lines
      </Heading>
      <Text>
        Connecting lines, solid lines that connect attributes and show the relationships of entities in the diagram.
      </Text>
    </Box>
  );
};

export default About;

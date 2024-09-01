import { Box,Button,Container,HStack,Image,Text,VStack,} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  const handleClickManual = () => {
    navigate("/whiteSpace/path");
  };
  const handleClickCustom = () => {
    navigate("/template/path");
  };
  return (
    <Container maxW="container.xl" mt={5}>
      <VStack spacing={8}>
        <HStack
          spacing={8}
          width="full"
          flexWrap="wrap"
          justifyContent="center"
        >
          <Box
            flex="1"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            padding="6"
            boxShadow="md"
            maxW="sm"
            margin="10px"
          >
            <Text fontSize="xl" mb={4} textAlign="center" fontWeight={"solid"}>
              Build Your ER Diagram
            </Text>
            <Image
              src="https://static-cse.canva.com/blob/994667/graph_er-diagram-maker_history_2x.jpg"
              alt="ER Diagram"
              mb={4}
            />
            <Button
              onClick={handleClickManual}
              colorScheme="teal"
              width="full"
              fontSize="lg"
            >
              Start Building
            </Button>
          </Box>
          <Box flex="1" borderRadius="lg">
            <Image
              src="https://i.pinimg.com/originals/0b/75/24/0b752417b0c83b2c273e0bb9bbec50bc.gif"
              alt="ER Diagram"
              mb={4}
            />
          </Box>
        </HStack>
      </VStack>

      <VStack spacing={8}>
        <HStack
          spacing={8}
          width="full"
          flexWrap="wrap"
          justifyContent="center"
        >
          <Box flex="1" borderRadius="lg">
            <Image
              src="https://www.slideteam.net/media/catalog/product/cache/1280x720/d/a/database_entity_relationship_diagram_for_e_commerce_slide01.jpg"
              alt="ER Diagram"
              mb={4}
            />
          </Box>

          <Box
            flex="1"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            padding="6"
            boxShadow="md"
            maxW="sm"
            margin="10px"
          >
            <Text fontSize="xl" mb={4} textAlign="center" fontWeight={"solid"}>
              ER Diagram Template
            </Text>
            <Image
              src="https://www.edrawsoft.com/templates/images/simple-chen-erd.png"
              alt="ER Diagram"
              mb={4}
            />
            <Button
              onClick={handleClickCustom}
              colorScheme="teal"
              width="full"
              fontSize="lg"
            >
              Start Building
            </Button>
          </Box>
        </HStack>
      </VStack>
    </Container>
  );
}

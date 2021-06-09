import { Button, Box, Flex, Heading, Spinner, Center } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'

export const App = ({ isLoading, children }) => {
  const router = useRouter()
  const isCompleted = router.asPath === '/completed'

  return (
    <Center>
      <Head>
        <title>TodoApp</title>
      </Head>
      <Box p={10} w={400}>
        <Flex alignItems="center" justifyContent="space-between" mb={2}>
          <Heading>Todos</Heading>
          <Button size="xs">
            <Link href={isCompleted ? '/' : '/completed'}>
              {isCompleted ? 'Hide Completed' : 'Show Completed'}
            </Link>
          </Button>
        </Flex>
        {isLoading ? (
          <Center>
            <Spinner mt={4} />
          </Center>
        ) : (
          children
        )}
      </Box>
    </Center>
  )
}

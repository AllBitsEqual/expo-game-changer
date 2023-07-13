import EditScreenInfo from '@/components/EditScreenInfo';
import { Center, Divider, Text } from '@/gluestack'

export default function TabOneScreen() {
  return (
    <Center flex={1}>
      <Text fontSize="$lg" fontWeight='bold'>Tab One</Text>
      <Divider my={30} w="$4/5" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </Center>
  );
}

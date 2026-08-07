import Box from '@mui/material/Box';
import type { Service } from '../../types';
import { Icon } from '../atoms/Icon';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Box
      component="article"
      sx={{
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Icon name={service.icon} label={service.name} />
      <Heading level={3}>{service.name}</Heading>
      <Text tone="soft" size="sm">
        {service.description}
      </Text>
    </Box>
  );
}

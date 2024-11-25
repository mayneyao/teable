import { useQuery } from '@tanstack/react-query';
import { getPublicSetting } from '@teable/openapi';

export function useAI() {
  const { data } = useQuery({
    queryKey: ['public-ai-config'],
    queryFn: () => getPublicSetting().then(({ data }) => data),
  });

  return {
    enable: data?.aiConfig?.enable ?? false,
  };
}

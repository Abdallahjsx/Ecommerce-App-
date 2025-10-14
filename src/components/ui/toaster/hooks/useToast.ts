import { useToaster } from '@/providers/ToasterProvider';

export const useToast = () => {
  const { showToast } = useToaster();
  return { showToast };
};

// Use Next navigation for navigation
import { useRouter } from 'next/navigation';

export default function useNavigate() {
  const router = useRouter();

  const navigate = (url: string) => {
    router.push(url);
  };

  return navigate;
}

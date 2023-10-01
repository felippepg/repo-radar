import { TextField } from '../ui/components/inputs/TextField';
import { Button } from '../ui/components/data-display/Button';
export const Home = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('chamou');
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField placeholder="Digite o nome do usuário do github" />
      <Button role="button">Buscar</Button>
    </form>
  );
};

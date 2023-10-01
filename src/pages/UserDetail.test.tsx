import { render, screen, waitFor } from '@testing-library/react';
import { UserDetail } from './UserDetail';

describe('UserDetail page', () => {
  test('Deveria retornar email do usuario', async () => {
    render(<UserDetail />);

    const email = 'felippe@email.com.br';
    await waitFor(() => {
      const element = screen.getByText(email);
      expect(element).toBeInTheDocument();
    });
  });
});

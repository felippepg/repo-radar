import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { user } from '../data/mocks/user';
import { useGetUserInfo } from '../data/state/hooks/useGetUserInfo';
import { UserDetail } from './UserDetail';

jest.mock('../data/state/hooks/useGetUserInfo', () => {
  return {
    useGetUserInfo: jest.fn(),
  };
});

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  return {
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

describe('UserDetail page', () => {
  beforeAll(() => {
    const navigateMock = jest.fn();
    require('react-router-dom').useNavigate.mockReturnValue(navigateMock);
  });

  beforeEach(() => {
    (useGetUserInfo as jest.Mock).mockReturnValue(user);
  });

  test('Deveria retornar informações do usuario', async () => {
    render(
      <BrowserRouter>
        <UserDetail />
      </BrowserRouter>
    );

    const bio = 'Bio: Software developer';
    await waitFor(() => {
      const element = screen.getByText(bio);
      expect(element).toBeInTheDocument();
    });
  });
});

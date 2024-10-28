import { act } from 'react';

import { render } from '@testing-library/react';
import useDebounce from './useDebounce';

const TestComponent = ({ value }: { value: string }) => {
  const debouncedValue = useDebounce(value, 300);
  return <div data-testid="debounced-value">{debouncedValue}</div>;
};

describe('useDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('должен сразу рендерить начальное значение', () => {
    const { getByTestId } = render(<TestComponent value="initial" />);
    expect(getByTestId('debounced-value').textContent).toBe('initial');
  });

  it('должен обновить значение с задержкой', () => {
    const { getByTestId, rerender } = render(<TestComponent value="initial" />);

    rerender(<TestComponent value="updated" />);

    expect(getByTestId('debounced-value').textContent).toBe('initial');

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(getByTestId('debounced-value').textContent).toBe('updated');
  });

  it('должен сбросить таймер, если значение изменилось до истечения задержки', () => {
    const { getByTestId, rerender } = render(<TestComponent value="initial" />);

    rerender(<TestComponent value="updated" />);

    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(getByTestId('debounced-value').textContent).toBe('initial');

    rerender(<TestComponent value="updated again" />);

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(getByTestId('debounced-value').textContent).toBe('updated again');
  });
});

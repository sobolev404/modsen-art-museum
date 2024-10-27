import {act} from "react";

import { render } from "@testing-library/react";
import useDebounce from "./useDebounce";

// Создаем тестовый компонент для отображения отложенного значения
const TestComponent = ({ value }: { value: string }) => {
  const debouncedValue = useDebounce(value, 300);
  return <div data-testid="debounced-value">{debouncedValue}</div>;
};

describe("useDebounce", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("должен сразу рендерить начальное значение", () => {
    const { getByTestId } = render(<TestComponent value="initial" />);
    expect(getByTestId("debounced-value").textContent).toBe("initial");
  });

  it("должен обновить значение с задержкой", () => {
    const { getByTestId, rerender } = render(<TestComponent value="initial" />);

    // Обновляем значение
    rerender(<TestComponent value="updated" />);

    // Проверяем, что значение не изменилось до истечения задержки
    expect(getByTestId("debounced-value").textContent).toBe("initial");

    // Продвигаем таймер на 300ms для истечения задержки
    act(() => {
      jest.advanceTimersByTime(300);
    });

    // Теперь значение должно обновиться
    expect(getByTestId("debounced-value").textContent).toBe("updated");
  });

  it("должен сбросить таймер, если значение изменилось до истечения задержки", () => {
    const { getByTestId, rerender } = render(<TestComponent value="initial" />);

    // Обновляем значение до "updated"
    rerender(<TestComponent value="updated" />);

    // Продвигаем таймер на 200ms (меньше задержки 300ms)
    act(() => {
      jest.advanceTimersByTime(200);
    });

    // Значение еще должно быть "initial"
    expect(getByTestId("debounced-value").textContent).toBe("initial");

    // Снова обновляем значение до "updated again"
    rerender(<TestComponent value="updated again" />);

    // Продвигаем таймер на 300ms после второго изменения
    act(() => {
      jest.advanceTimersByTime(300);
    });

    // Теперь значение должно быть "updated again"
    expect(getByTestId("debounced-value").textContent).toBe("updated again");
  });
});

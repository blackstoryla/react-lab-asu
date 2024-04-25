import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import {Button} from './components/Button';
import '@testing-library/jest-dom';

describe('Компонент Button', () => {
  test('отрисовывает кнопку с корректным текстом', () => {
    const buttonText = 'Тест текст';
    const { getByText } = render(<Button>{buttonText}</Button>);
    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  test('вызывает функцию onClick при клике', () => {
    const onClickMock = jest.fn();
    const buttonText = 'Тест текст';
    const { getByText } = render(<Button onClick={onClickMock}>{buttonText}</Button>);
    const buttonElement = getByText(buttonText);
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});

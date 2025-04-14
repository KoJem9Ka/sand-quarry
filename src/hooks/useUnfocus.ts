import { type RefObject, useEffect } from 'react';


/**
 * Хук вызывает callback при нажатии вне всех элементов refs или нажатии клавиши Escape.
 */
export function useUnfocus({
  refs,
  callback,
  isEnabled = true,
}: {
  refs: Array<RefObject<HTMLOrSVGElement | null>>,
  callback: VoidFunction,
  isEnabled: boolean,
}) {
  useEffect(() => {
    if (!isEnabled) return;
    const handleEvent = (event: MouseEvent | KeyboardEvent) => {
      if (event.type === 'keydown') {
        // Обработка нажатия Escape
        const keyboardEvent = event as KeyboardEvent;
        if (keyboardEvent.key === 'Escape') {
          callback();
        }
      } else if (event.type === 'mousedown') {
        // Обработка клика вне элементов
        const mouseEvent = event as MouseEvent;
        const target = mouseEvent.target as Node | null;

        if (!target) return;

        // Получаем актуальные DOM-элементы
        const elements = refs
          .map(ref => ref.current)
          .filter((element): element is HTMLElement => element !== null);

        // Проверяем, что клик произошел вне всех элементов
        const isOutside = elements.length && !elements.some(element => element.contains(target));

        if (isOutside) {
          callback();
        }
      }
    };

    document.addEventListener('mousedown', handleEvent);
    document.addEventListener('keydown', handleEvent);

    return () => {
      document.removeEventListener('mousedown', handleEvent);
      document.removeEventListener('keydown', handleEvent);
    };
  }, [refs, callback, isEnabled]);
}

import { IconArrow, iconArrowCva } from '@/components/icons/IconArrow';


type PaginationProps = {
  pagesCount: number;
  currentPage: number;
  neighbors?: number;
  onPageChange: (page: number) => void;
}


export function Pagination(props: PaginationProps) {
  const buttons = calcPagesButtons({ pagesCount: props.pagesCount, currentPage: props.currentPage, neighbors: props.neighbors ?? 2 });

  const onPrev = () => props.onPageChange(props.currentPage - 1 || props.pagesCount);
  const onNext = () => props.onPageChange((props.currentPage + 1) % (props.pagesCount + 1) || 1);

  return (
    <div className="flex justify-between gap-3 items-center">
      <nav className="flex gap-1 items-center justify-center">
        {buttons.map((btn, i) => (
          btn === null
            ? <span key={i} className="max-md:text-xs text-gray-400 pointer-events-none select-none">...</span>
            : <button
              key={i}
              className={`max-md:text-xs cursor-pointer px-3 py-1 rounded ${btn === props.currentPage ? 'bg-gray-200' : 'hover:bg-gray-300'}`}
              onClick={() => props.onPageChange(btn)}
            >
              {btn}
            </button>
        ))}
      </nav>
      <div className="flex gap-3">
        <IconArrow direction="left" className={iconArrowCva()} onClick={onPrev} />
        <IconArrow direction="right" className={iconArrowCva()} onClick={onNext} />
      </div>
    </div>
  );
}

/**
 * @cases:
 *   if neighbors = 2:
 *   [1] 2 3 ... 50;
 *   1 ... 46 47 [48] 49 50;
 *   1 [2] 3 4 ... 50;
 *   1 2 [3] 4 5 ... 50;
 *   1 2 3 4 [5] 6 7 ... 50 // if one element (2) will be hidden then it will not be hidden;
 *   1 ... 4 5 [6] 7 8 ... 50.
 * @return array of "page numbers and nulls for <...>".
 */
function calcPagesButtons(args: { pagesCount: number; currentPage: number; neighbors: number; }): (number | null)[] {
  const { pagesCount, currentPage, neighbors } = args;

  // «Обязательные» страницы: первая, последняя и "окно" вокруг текущей
  const pagesSet = new Set<number>();
  pagesSet.add(1);
  pagesSet.add(pagesCount);

  // Добавляем "окно" из соседей
  const start = Math.max(currentPage - neighbors, 1);
  const end = Math.min(currentPage + neighbors, pagesCount);
  for (let p = start; p <= end; p++) {
    pagesSet.add(p);
  }

  // Сортируем, чтобы обрабатывать подряд и искать «пропуски»
  const sortedPages = Array.from(pagesSet).sort((a, b) => a - b);

  // Формируем итоговый массив
  const result: (number | null)[] = [];
  for (let i = 0; i < sortedPages.length - 1; i++) {
    const current = sortedPages[i]!;
    const next = sortedPages[i + 1]!;
    result.push(current);

    const diff = next - current;

    // Если между текущей и следующей ровно одна «пропущенная» страница
    if (diff === 2) {
      // Добавляем эту страницу явно
      result.push(current + 1);
    } else if (diff > 2) {
      // Если пропуск больше — вставляем троеточие (null)
      result.push(null);
    }
  }

  // Добавляем последнюю страницу
  result.push(sortedPages[sortedPages.length - 1]!);

  return result;
}

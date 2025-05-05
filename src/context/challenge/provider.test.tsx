import { useContext } from 'react';
import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { ChallengeContext } from './context';
import ChallengeProvider from './provider';

const MockComponent = () => {
    const context = useContext(ChallengeContext);
    if (!context) throw new Error('No context available');

    const { firstBucket, secondBucket, fillBucket, emptyBucket, transferWater, resetChallenge, movesCount, isSolved } =
        context;

    return (
        <div>
            <p data-testid="first">{firstBucket.currentWaterQuantity}</p>
            <p data-testid="second">{secondBucket.currentWaterQuantity}</p>
            <p data-testid="moves">{movesCount}</p>
            <p data-testid="solved">{isSolved ? 'yes' : 'no'}</p>
            <button type="button" onClick={() => fillBucket('first')}>
                fill first
            </button>
            <button type="button" onClick={() => fillBucket('second')}>
                fill second
            </button>
            <button type="button" onClick={() => emptyBucket('first')}>
                empty first
            </button>
            <button type="button" onClick={() => emptyBucket('second')}>
                empty second
            </button>
            <button type="button" onClick={() => transferWater('first', 'second')}>
                Transfer first to second
            </button>
            <button type="button" onClick={() => transferWater('second', 'first')}>
                Transfer second to first
            </button>
            <button type="button" onClick={resetChallenge}>
                Reset
            </button>
        </div>
    );
};

describe('ChallengeProvider', () => {
    it('Should complete the challenge starting from the first bucket', () => {
        const { getByText, getByTestId } = render(
            <ChallengeProvider>
                <MockComponent />
            </ChallengeProvider>,
        );

        // Initial state.
        expect(getByTestId('first').textContent).toBe('0');
        expect(getByTestId('second').textContent).toBe('0');
        expect(getByTestId('moves').textContent).toBe('0');
        expect(getByTestId('solved').textContent).toBe('no');

        // Fill the first bucket.
        fireEvent.click(getByText('fill first'));
        expect(getByTestId('first').textContent).toBe('3');
        expect(getByTestId('second').textContent).toBe('0');
        expect(getByTestId('moves').textContent).toBe('1');
        expect(getByTestId('solved').textContent).toBe('no');

        // Transfer from the first bucket to the second.
        fireEvent.click(getByText('Transfer first to second'));
        expect(getByTestId('first').textContent).toBe('0');
        expect(getByTestId('second').textContent).toBe('3');
        expect(getByTestId('moves').textContent).toBe('2');
        expect(getByTestId('solved').textContent).toBe('no');

        // Fill the first bucket.
        fireEvent.click(getByText('fill first'));
        expect(getByTestId('first').textContent).toBe('3');
        expect(getByTestId('second').textContent).toBe('3');
        expect(getByTestId('moves').textContent).toBe('3');
        expect(getByTestId('solved').textContent).toBe('no');

        // Transfer from the first bucket to the second.
        fireEvent.click(getByText('Transfer first to second'));
        expect(getByTestId('first').textContent).toBe('1');
        expect(getByTestId('second').textContent).toBe('5');
        expect(getByTestId('moves').textContent).toBe('4');
        expect(getByTestId('solved').textContent).toBe('no');

        // Empty the second bucket.
        fireEvent.click(getByText('empty second'));
        expect(getByTestId('first').textContent).toBe('1');
        expect(getByTestId('second').textContent).toBe('0');
        expect(getByTestId('moves').textContent).toBe('5');
        expect(getByTestId('solved').textContent).toBe('no');

        // Transfer from the first bucket to the second.
        fireEvent.click(getByText('Transfer first to second'));
        expect(getByTestId('first').textContent).toBe('0');
        expect(getByTestId('second').textContent).toBe('1');
        expect(getByTestId('moves').textContent).toBe('6');
        expect(getByTestId('solved').textContent).toBe('no');

        // Fill the first bucket.
        fireEvent.click(getByText('fill first'));
        expect(getByTestId('first').textContent).toBe('3');
        expect(getByTestId('second').textContent).toBe('1');
        expect(getByTestId('moves').textContent).toBe('7');
        expect(getByTestId('solved').textContent).toBe('no');

        // Transfer from the first bucket to the second.
        fireEvent.click(getByText('Transfer first to second'));
        expect(getByTestId('first').textContent).toBe('0');
        expect(getByTestId('second').textContent).toBe('4');
        expect(getByTestId('moves').textContent).toBe('8');
        expect(getByTestId('solved').textContent).toBe('yes');
    });

    it('Should complete the challenge starting from the second bucket', () => {
        const { getByText, getByTestId } = render(
            <ChallengeProvider>
                <MockComponent />
            </ChallengeProvider>,
        );

        // Initial state.
        expect(getByTestId('first').textContent).toBe('0');
        expect(getByTestId('second').textContent).toBe('0');
        expect(getByTestId('moves').textContent).toBe('0');
        expect(getByTestId('solved').textContent).toBe('no');

        // Fill the second bucket.
        fireEvent.click(getByText('fill second'));
        expect(getByTestId('first').textContent).toBe('0');
        expect(getByTestId('second').textContent).toBe('5');
        expect(getByTestId('moves').textContent).toBe('1');
        expect(getByTestId('solved').textContent).toBe('no');

        // Transfer from the second bucket to the first.
        fireEvent.click(getByText('Transfer second to first'));
        expect(getByTestId('first').textContent).toBe('3');
        expect(getByTestId('second').textContent).toBe('2');
        expect(getByTestId('moves').textContent).toBe('2');
        expect(getByTestId('solved').textContent).toBe('no');

        // Empty the first bucket.
        fireEvent.click(getByText('empty first'));
        expect(getByTestId('first').textContent).toBe('0');
        expect(getByTestId('second').textContent).toBe('2');
        expect(getByTestId('moves').textContent).toBe('3');
        expect(getByTestId('solved').textContent).toBe('no');

        // Transfer from the second bucket to the first.
        fireEvent.click(getByText('Transfer second to first'));
        expect(getByTestId('first').textContent).toBe('2');
        expect(getByTestId('second').textContent).toBe('0');
        expect(getByTestId('moves').textContent).toBe('4');
        expect(getByTestId('solved').textContent).toBe('no');

        // Fill the second bucket.
        fireEvent.click(getByText('fill second'));
        expect(getByTestId('first').textContent).toBe('2');
        expect(getByTestId('second').textContent).toBe('5');
        expect(getByTestId('moves').textContent).toBe('5');
        expect(getByTestId('solved').textContent).toBe('no');

        // Transfer from the second bucket to the first.
        fireEvent.click(getByText('Transfer second to first'));
        expect(getByTestId('first').textContent).toBe('3');
        expect(getByTestId('second').textContent).toBe('4');
        expect(getByTestId('moves').textContent).toBe('6');
        expect(getByTestId('solved').textContent).toBe('yes');
    });
});

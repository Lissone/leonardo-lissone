import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 0.75rem;

  display: flex;
  align-items: center;

  ul {
    list-style: none;
  }

  li {
    display: inline;
  }

  label {
    margin: 0.5rem 1rem 0.5rem 0rem;
    padding: 0.625rem 1.125rem;

    font-size: 1.125rem;
    cursor: pointer;

    display: inline-block;
    white-space: nowrap;

    border: 1px solid var(--gray-700);
    border-radius: 0.25rem;

    background: none;
    color: var(--gray-600);

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;

    transition: all 0.2s;
  }

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
  }

  input[type='checkbox']:hover + label {
    filter: brightness(0.9);

    transition: filter 0.2s;
  }

  input[type='checkbox']:checked + label {
    border: 1px solid var(--red-400);
    box-shadow: 0rem 0rem 0.35rem var(--red-400);

    color: var(--red-400);

    transition: all 0.2s;
  }
`

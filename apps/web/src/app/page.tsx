'use client';

import { Button, SupportedColorScheme, TextField, useColorScheme } from '@mui/material';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Header } from './_ui/hedaer';

const API_HOST = process.env.NEXT_PUBLIC_API_HOST || 'http://localhost:3001';

export default function Web() {
  const { mode, setMode } = useColorScheme();

  const [name, setName] = useState<string>('');
  const [response, setResponse] = useState<{ message: string } | null>(null);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    setResponse(null);
    setError(undefined);
  }, [name]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await fetch(`${API_HOST}/message/${name}`);
      const response = await result.json();
      setResponse(response);
    } catch (err) {
      console.error(err);
      setError('Unable to fetch response');
    }
  };

  const onReset = () => {
    setName('');
  };

  return (
    <div>
      <Header />
      <h1>Web</h1>
      <select
        value={mode}
        onChange={event => {
          setMode(event.target.value as SupportedColorScheme);
          // For TypeScript, cast `event.target.value as 'light' | 'dark' | 'system'`:
        }}
      >
        <option value='system'>System</option>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </select>

      <form onSubmit={onSubmit}>
        <TextField type='text' name='name' id='name' value={name} label='Name' onChange={onChange}></TextField>
        <Button type='submit'>Submit</Button>
      </form>
      {error && (
        <div>
          <h3>Error</h3>
          <p>{error}</p>
        </div>
      )}
      {response && (
        <div>
          <h3>Greeting</h3>
          <p>{response.message}</p>
          <Button onClick={onReset}>Reset</Button>
        </div>
      )}
    </div>
  );
}

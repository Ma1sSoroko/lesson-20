export function Main(props: { children: React.ReactNode }): React.ReactElement {
  return (
    <main className="flex-grow-1">
      {props.children}
    </main>
  )
}
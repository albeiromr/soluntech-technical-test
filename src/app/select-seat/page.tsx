import SeatsComponent from "@/components/seats.component";

export default function SelectSeatPage() {
  return (
    <section className="page">
      <div className="page__display-container">
        <img src="/assets/pantalla.png" alt="cinema display image" />
      </div>

      <SeatsComponent />
      
    </section>
  )
}

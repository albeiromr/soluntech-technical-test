export class TopNavigationService {
  /**
   * Returns the tutle for the current page
   */
  public static generatePageTitle(currentPath: string): string {
    if (currentPath == "/") return "Latest Movies";
    if (currentPath == "/select-seat") return "Select Seat";
    if (currentPath.includes("/movie-details")) return "Movie Details";
    if (currentPath == "/checkout") return "Checkout";
    return "No Title"
  }
}

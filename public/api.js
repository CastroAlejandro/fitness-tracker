const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
  },
  async addExercise(data) {
   		const id = location.search.split("=")[1];
		let parsedInfo = JSON.stringify(data);

		let url = `http://localhost:8080/api/workouts/${id}`;
		let headers = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: parsedInfo
		};

		let response = await fetch(url, headers);
		const json = await response.json();
		console.log(json);
		return json;
  },
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};

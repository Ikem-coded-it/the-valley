import { toast } from "react-toastify";
import $http from "./$http";

class Community {
  public async index() {
    try {
      const response = await $http.get("/community");

      return response.data.data;
    } catch (error) {
      toast.error("Something went wrong fetching communities");
      return new Error(error.message);
    }
  }

  public async show(id: string) {
    try {
      const response = await $http.get(`/community/${id}`);
      return response.data.data;
    } catch (error) {
      toast.error("Something went wrong fetching community");
      return new Error(error.message);
    }
  }

  public async store(payload, qs) {
    try {
      await $http.post(`/community?id=${qs}`, payload);
      toast.success("Community created successfully");
    } catch (error) {
      toast.error(error.message);

      return error;
    }
  }

  public async join(communityId, userId) {
    try {
      await $http.post(`/community/join/${communityId}/${userId}`);
      window.location.href = `/communities/${communityId}`;
      toast.success("You have successfully joined this community");
    } catch (error) {
      toast.error(error.message);

      return error;
    }
  }

  public async post(communityId: string, payload: any) {
    try {
      const response = await $http.post(
        `/community/create-post/${communityId}`,
        payload
      );
      window.location.href = `/communities/${communityId}`;
      toast.success("Post sent!");
      return response.data.data;
    } catch (error) {
      toast.error("Something went wrong creating post");
      return new Error(error.message);
    }
  }

  public async getReactions(qs: string, id: string) {
    try {
      const response = await $http.get(
        `/community/react/index/${id}?kind=${qs}`
      );

      const count = response.data.data.length;
      const reaction = response.data.data;
      return {
        count,
        reaction,
      };
    } catch (error) {
      toast.error("Error fetching reaction");

      return error;
    }
  }

  public async reaction(qs: string, id: string) {
    try {
      const response = await $http.post(
        `/community/react/store/${id}?kind=${qs}`
      );
      toast.success("Sent!");

      return response.data.data;
    } catch (error) {
      toast.error("An error occurred");

      return error;
    }
  }

  public async removeReaction(id: string, qs: string) {
    try {
      const response = await $http.delete(
        `/community/react/destroy/${id}?kind=${qs}`
      );
      toast.success("Reaction removed!");

      return response.data.data;
    } catch (error) {
      toast.error("An error occurred");

      return error;
    }
  }
}

export const community = new Community();

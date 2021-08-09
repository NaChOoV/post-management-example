import { Logger, NotFoundException } from '@nestjs/common';
import { Post } from 'src/entities/post.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  private logger = new Logger('PostRespository', true);

  async getAllPost(): Promise<Post[]> {
    return await this.find();
  }

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const { name, description } = createPostDto;

    const createdPost: Post = this.create({
      name,
      description,
    });

    await this.save(createdPost);
    return createdPost;
  }

  async deletePostById(postId: string): Promise<Post> {
    const deletedPost = await this.findOne({ id: postId });
    if (!deletedPost) {
      return deletedPost;
    }
    return await this.remove(deletedPost);
  }
}

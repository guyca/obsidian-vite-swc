import {Singleton, ObjectGraph, Provides, DependenciesOf} from 'react-obsidian';

type Deps = DependenciesOf<AppGraph>;

@Singleton()
export class AppGraph extends ObjectGraph {
  @Provides({name: 'foo'})
  foo(deps: Deps) {
    return 'foo' + deps.bar;
  }

  @Provides({name: 'bar'})
  bar() {
    return 'bar';
  }
}